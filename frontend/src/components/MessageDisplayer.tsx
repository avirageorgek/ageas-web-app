
interface MessageDisplayer {
    message: string,
    messageType: "info" | "danger" | "warning"
}

const MessageDisplayer: React.FC<MessageDisplayer> = ({
    message,
    messageType
}) => {
    console.log("Message type: ", (messageType === "info") && "border-orange-500 ");
    return (
        <div className='flex flex-row justify-center'>
            <div className={"bg-orange-100 border-l-4 p-4 " + 
                ((messageType === "info") && "border-orange-500 ") + 
                ((messageType === "danger") && "border-red-600 ")
            } role="alert">
                <p className="font-bold">{message}</p>
            </div>
        </div>
    )
}

export default MessageDisplayer;