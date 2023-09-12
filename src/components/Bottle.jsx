const Bottle = ({bottle, addCart}) => {
    const {img, name, price, seller} = bottle;
    return (
        <div className="bottle-card">
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Company: {seller}</p>
            <button onClick={() => addCart(bottle)} className="cart-btn">Add Cart</button>
        </div>
    );
};

export default Bottle;