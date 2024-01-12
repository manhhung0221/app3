
export default function TabButton({children,selectButton}) {

    return <li>
        <button onClick={selectButton}>{children}</button>
        </li>
}