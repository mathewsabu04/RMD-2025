export const ButtonAction = ({onClick, children, buttonType = 'button'}) =>(
    <button
    type={buttonType}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    onClick={onClick}
    >
        {children}
    </button>
);

export const ButtonPrimary = ({ onClick, children, buttonType}) =>(
    <button
    type={buttonType}
    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
    onClick={onClick}
    >{children}</button>
)