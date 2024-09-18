

function Info() {
    const data = [
        { "name": "Alice", "roll": 101, "age": 20 },
        { "name": "Bob", "roll": 102, "age": 21 },
        { "name": "Charlie", "roll": 103, "age": 22 },
        { "name": "Diana", "roll": 104, "age": 19 },
        { "name": "Ethan", "roll": 105, "age": 23 }
    ]
    const datas = [1,2,3,4,5]
    console.log(data.length)
    return (
        <>
        <h1>this is data</h1>
   <div>
   {
            datas?.map((data, index) => {
                <div key={index} >
                    <h1>name : </h1>
                    <h1>roll : </h1>
                    <h1>age  : </h1>
                </div>
            })
        }
   </div>
        </>
    )
}
export default Info