import React, { useState } from "react";
import './Product.css';
import ShowProducts from "../showProducts/ShowProducts";
import AddOrEditProducts from "../AddOrEditProduct/AddOrEditProducts";
const productsInitialValue = [
  {
    id: 1,
    title: "Asus 1020",
    price: "900",
    colors: ["red", "black", "silver"],
    mode: false
  },
  {
    id: 2, title: "HP Pavilion",
    price: "1100",
    colors: ["black", "silver"],
    mode: false
  },
  {
    id: 3,
    title: "Levono 7850",
    price: "1200",
    colors: ["yellow", "black", "silver"],
    mode: false
  },
  {
    id: 4, title: "Apple Macbook",
    price: "1850",
    colors: ["black", "silver"],
    mode: false
  },
  {
    id: 5, title: "Surface 128",
    price: "1500",
    colors: ["red"],
    mode: false
  },
  {
    id: 6, title: "Dell 8050",
    price: "1300",
    colors: ["blue", "black"],
    mode: false
  },
  {
    id: 7,
    title: "Toshiba 7450",
    price: "800",
    colors: ["red", "black", "silver"],
    mode: false
  },
];


const Product = () => {
  const [products, setProducts] = useState(productsInitialValue);
  const [selectedItems, setSelectedItems] = useState([]);
  const [price, setPrice] = useState(0);

  const addToList = (product) => {
    setSelectedItems([...selectedItems, product])
    let temp = parseInt(price) + parseInt(product.price)
    setPrice(temp)

  }
  const removeItem = (id, mode) => {
    if (id === null) {
      const temp = products.filter(q => q.id !== null)
      setProducts([...temp])
    }
    else {
      let temp = [...products]
      let index = products.findIndex(q => q.id === id);
      temp[index].mode = mode;
      setProducts([...temp])
    }
  }
  const removeToList = (product) => {
    let temp = selectedItems.filter(q => q.id !== product.id);
    setSelectedItems([...temp])

    let totalPrice = parseInt(price) - parseInt(product.price)
    setPrice(totalPrice)

  }
  const selectedProdcut = (item) => {
    return selectedItems.findIndex(q => q.id === item.id) !== -1
  }
  const editItem = (item) => {
    item.mode = !item.mode;
    let temp = [...products];
    const index = temp.findIndex(q => q.id == item.id);
    temp[index] = item;
    setProducts([...temp]);
  }
  const AddNewItem = () => {
    let hasNullid = products.some(q => q.id === null);
    if (hasNullid) {
      return;
    }
    let newProduct = {
      id: null,
      title: "",
      price: "",
      mode: true,
      colors: [],
    }
    setProducts([...products, newProduct])
  }
  const save = (item) => {
    item.mode = false;
    if (item.id == null) {
      insert(item);
    } else {
      update(item);
    }
  }
  const insert = (item) => {
    item.id = products.length * 2;
    let temp = [...products].filter(q => q.id != null);
    setProducts([...temp, item]);
  }
  const update = (item) => {
    let temp = [...products];
    const index = temp.findIndex(q => q.id == item.id);
    temp[index] = item;
    setProducts([...temp]);
  }






  return (
    <section className="ProductList">
      <button onClick={() => AddNewItem()}>اضافه کردن محصول جدید</button>
      <h3>جمع کل : {price}</h3>
      <br />
      <h3>تعداد آیتم های انتخاب شده{selectedItems.length}</h3>
      <br />
      <section>

        {products.map((item, index) => (
          item.mode !== true ?
            <ShowProducts product={item} remove={removeToList} editItem={editItem} add={addToList} selected={selectedProdcut(item)}
            /> :
            <AddOrEditProducts product={item} Save={save} removeItem={removeItem} />





        ))}


      </section>

    </section>
  )
}


export default Product
