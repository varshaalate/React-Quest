import User from './User'

const Component = () => {
const userlist = ['xyz' , 'pqr' , 'abc']
  return (
    <div>
      {userlist.map((user , index) =>(
      <User key={index} name={user}/>)
    )}
    </div>
  )
}

export default Component
