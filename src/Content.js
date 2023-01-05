import ItemList from "./ItemList";
const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '0.5rem' }}>List is empty!</p>
            )
            }
        </main>
    )
}

export default Content;