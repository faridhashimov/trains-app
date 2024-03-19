import { useLocation } from 'react-router-dom'
import { useGetTrainsQuery } from '../../redux/trains'
import '../Trains/Trains.css'
import './Characteristics.css'
import { useEffect, useState } from 'react'
import { Characteristics } from '../../types/trains'

const Characteristics = () => {
    const [characters, setCharacters] = useState<Characteristics[] | undefined>(
        []
    )
    const [disabled, setDisabled] = useState(false)
    const { pathname } = useLocation()

    const NON_NEGATIVE_INTEGER_WITH_0 = new RegExp(/^([1-9]\d*|0)$/)
    const NON_NEGATIVE_NON_INTEGER = new RegExp(/^[0-9]*[.,][0-9]+$/)

    const validation = (field: string, value: number) => {
        if (field === 'force' && NON_NEGATIVE_NON_INTEGER.test(String(value))) {
            return false
        } else if (
            (field === 'engineAmperage' || field === 'speed') &&
            NON_NEGATIVE_INTEGER_WITH_0.test(String(value))
        ) {
            return false
        } else {
            return true
        }
    }

    const onCharChange =
        (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setDisabled(validation(e.target.name, +e.target.value))

            const newArr = characters?.map((item, i) => {
                if (index === i) {
                    return { ...item, [e.target.name]: +e.target.value || '' }
                } else {
                    return item
                }
            })

            setCharacters(newArr)
        }

    const { data: trains } = useGetTrainsQuery()

    useEffect(() => {
        setCharacters(
            trains?.find(
                (item) => item.description.slice(9) === pathname.slice(1)
            )?.characteristics
        )
    }, [pathname, trains])

    const onSubmitTable = (characters: Characteristics[] | undefined) => {
        characters?.forEach((char) => console.log(char.speed))
    }

    return (
        <section className="characteristics">
            <h1 className="characteristics-title">Характеристики</h1>
            <table cellSpacing="0">
                <caption>Поезд №{pathname.slice(1)}</caption>
                <thead>
                    <tr>
                        <td>Тип двигателя</td>
                        <td>Сила тяги</td>
                        <td>Скорость</td>
                    </tr>
                </thead>
                <tbody>
                    {characters?.map((char, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <input
                                        // Тип двигателя
                                        name="engineAmperage"
                                        value={char.engineAmperage}
                                        type="number"
                                        onChange={onCharChange(index)}
                                        className={
                                            validation(
                                                'engineAmperage',
                                                char.engineAmperage
                                            )
                                                ? 'invalid_value'
                                                : 'valid_value'
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        // Сила тяги
                                        name="force"
                                        value={char.force}
                                        type="number"
                                        onChange={onCharChange(index)}
                                        className={
                                            validation('force', char.force)
                                                ? 'invalid_value'
                                                : 'valid_value'
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        // Скорость
                                        name="speed"
                                        value={char.speed}
                                        type="number"
                                        onChange={onCharChange(index)}
                                        className={
                                            validation('speed', char.speed)
                                                ? 'invalid_value'
                                                : 'valid_value'
                                        }
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <footer className="characteristics-footer">
                <button
                    onClick={() => onSubmitTable(characters)}
                    className="submit"
                    disabled={disabled}
                >
                    Отправить данные
                </button>
            </footer>
        </section>
    )
}
export default Characteristics
