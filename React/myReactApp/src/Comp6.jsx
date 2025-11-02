// The inline CSS used in react uses "key:value pairs within {}"

function Comp6() {
    // This is all Internal Css (It's just an object.)
    const intCss = {
        color : "white",
        backgroundColor : "navy",
        lineHeight : "100px"
    };



    return (
        <>
            {/*Internal Css example*/}
            <h1 align="center" style={intCss}> Component 6 </h1>


            {/*External or class Css example*/}
            <h3 className="alert alert-warning"> Demo Component </h3>


            {/*Inline Css example*/}
            <p style={
                {
                    // This is all inline css
                    color : "red",
                    padding : "20px",
                    backgroundColor : "#ddd"
                }
            }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi assumenda culpa deleniti ducimus ea in maiores neque
                nostrum omnis optio quis quisquam
                quod tenetur totam veritatis voluptas,
                voluptatibus. Quam, temporibus?
            </p>
        </>

    )
}

export default Comp6;