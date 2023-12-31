const API_URL = 'https://seafood-wave-api.onrender.com/api';

export async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw Error('Failed getting menu');
  }
}

export async function getMenuByCategory(category) {
  try {
    const res = await fetch(`${API_URL}/menu/category/${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw Error('Failed getting menu');
  }
}

export async function getMenuById(menuId) {
  try {
    const res = await fetch(`${API_URL}/menu/${menuId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw Error('Failed getting menu detail');
  }
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const data = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
