function ContentPage({ data }) {
    return (
        <div>
            <h1>{data.header}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default ContentPage;