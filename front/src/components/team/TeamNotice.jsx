import { useContext } from 'react'
import { Context } from '../../context/football_app_context'

const TeamNotice = () => {
    const { footballData } = useContext(Context)

    return (
        <div>Test</div>
    )
}

export default TeamNotice