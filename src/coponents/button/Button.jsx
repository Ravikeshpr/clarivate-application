/* eslint-disable react/prop-types */

import "./Button.scss";

export default function Button({ label, ...rest }) {
    return <button {...rest}>{label}</button>;
}
