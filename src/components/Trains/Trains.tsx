import { useNavigate } from 'react-router-dom'
import './Trains.css'
import { useGetTrainsQuery } from '../../redux/trains'

const Trains = () => {
    const navigate = useNavigate()
    const onRowClick = (id: number) => {
        return navigate(`/${id}`)
    }

    const { data: trains } = useGetTrainsQuery()

    return (
        <section className="trains">
            <table cellSpacing="0">
                <caption>Поезда</caption>
                <thead>
                    <tr>
                        <td>Название</td>
                        <td>Описание</td>
                    </tr>
                </thead>
                <tbody>
                    {trains?.map((train) => {
                        const id = +train.description.slice(8)
                        return (
                            <tr key={id} onClick={() => onRowClick(id)}>
                                <td>{train.name}</td>
                                <td>{train.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default Trains
