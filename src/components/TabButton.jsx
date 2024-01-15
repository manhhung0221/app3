
export default function TabButton({ children, selectButton, isSelect }) {

    return <li>
        <button className={isSelect ? 'active' : undefined} onClick={selectButton}>{children}</button>
    </li>
}