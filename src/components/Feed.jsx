import Sidebar from './Sidebar'
import Videos from './Sidebar'

const Feed = () => {
  return (
    <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div>
            <Videos />
        </div>
    </div>
  )
}

export default Feed