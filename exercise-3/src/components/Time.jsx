function Time() {
    let date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return(
        <h2>
            {time}
        </h2>
    );
}
export default Time;