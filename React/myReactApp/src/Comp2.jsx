// The name of the component should always start with capital letter.
// Otherwise, it does not consider it as Component only.
// Every component can return only one element(container).
// Always wrap all the elements inside a container.
// There was no need of any container, but we used it to send it as a single element.
// So, we can use "Empty Tag<>" as a container, which will not be added to DOM also.


function Comp2(){
    return(
    <>
        <h1 align='center'> Component 2 </h1>
        <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aspernatur dolorem,
            error, fuga impedit maiores molestiae nisi
            quidem soluta tempora, ullam vero voluptatum.
            Animi, maxime porro. Cupiditate esse nesciunt quae ullam!
        </p>
    </>
    )
}

export default Comp2;