type ButtonType = {
    label: string,
    onClick: () => void,
    variant: string
}
export default function Button({
    label, onClick, variant = 'primary'
}: ButtonType) {
    return (
        <button style={{color: `${variant}`}}
            onClick={onClick}>
            {label}
        </button>
    )
}