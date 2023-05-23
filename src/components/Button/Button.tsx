import './Button.scss';
interface Props {
  value: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  isClickable?: boolean;
}
export const Button = ({ value, onClick, isClickable = true }: Props) => {
    return (
        <input
            type="button"
            className={`Button__input ${isClickable && 'Button__input--clickable'}`}
            value={value}
            onClick={onClick}
        />
    );
};
