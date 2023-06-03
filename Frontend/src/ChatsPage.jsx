import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) =>{
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='118ef2b4-c8df-4ccc-9243-86fe0710cba5'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        />
    </div>
    )
}

export default ChatsPage