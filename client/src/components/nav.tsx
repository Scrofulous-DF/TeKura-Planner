import { Link } from "react-router-dom";

interface MyLinkProps {
    children: string;
    to: string;
}

function MyLink(props: MyLinkProps) {
    return (
        <li>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )
}

export function Nav() {
    return (
        <>
            <ol>
                <MyLink to="/">home</MyLink>
                <MyLink to="/login">login</MyLink>
                <MyLink to="/main">main</MyLink>
            </ol>
        </>
    )
}