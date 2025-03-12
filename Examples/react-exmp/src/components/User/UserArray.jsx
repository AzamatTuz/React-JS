import UserCard from './UserCard'

export default function UserArray() {
    
    const userLists = [
        {name: 'Aza', age: 16, email: 'demo@email'},
        {name: 'Asu', age: 20, email: 'asu@email'},
        {name: 'Zeiin', age: 20, email: 'zeiin@email'},
        {name: 'Danial', age: 19, email: 'danial@email'},
    ]

    const userList = userLists.map((user, i) => 
        <UserCard key={i} name={user.name} age={user.age} email={user.email} />
    )
    
    return (
        <ul>
            {userList}
        </ul>
    );
}