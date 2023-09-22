

const StatefulForm = () => {

    const handleSubmit = e =>{
        console.log('thissjgvsdjn');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" /> <br />    
                <input type="email" name="email" id="" /><br />
                <input type="text" name="phone" />
                <br />
                <button>Submit</button>
                {/* <button type="submit" value="Submit"></button> */}
            </form>
        </div>
    );
};

export default StatefulForm;