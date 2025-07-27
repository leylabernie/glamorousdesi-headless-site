/**
 * Computes a simple shipping cost based on the quantity of items in the cart.
 * This implementation charges a flat rate per item. You can adjust the
 * calculation to reflect your real-world logistics costs (e.g. weight,
 * destination, carrier, etc.).
 *
 * @param {Array<{quantity: number}>} items List of cart line items
 * @returns {number} Total shipping cost for the cart
 */
export function calculateShipping(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }
  const ratePerItem = 5; // flat rate per unit
  return items.reduce((total, item) => {
    const qty = Number(item?.quantity) || 0;
    return total + qty * ratePerItem;
  }, 0);
}
