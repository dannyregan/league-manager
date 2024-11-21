import { createRoot } from "react-dom/client" // creates the container in which react is going to mount itself in the front end

const App = () => {
    return <div>Hello React</div>;
}

const container = document.getElementById("app") // We use react to avoid calling the DOM API directly, but we need to use this as an entry point for React.
const root = createRoot(container)

root.render(<App />)