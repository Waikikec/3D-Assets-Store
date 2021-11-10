import './details.css';
import Sidebar from '../../components/sidebar/Sidebar'
import Single from '../../components/single/Single';

export default function Details() {
    return (
        <div className="details">
            {/* post */}
            <Single />
            <Sidebar />
        </div>
    )
}