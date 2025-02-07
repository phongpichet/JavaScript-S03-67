function summarizeOrders(orders) {
    if (!orders || orders.length === 0) return [];
    
    const summary = {};
    
    orders.forEach(order => {
        const countedProducts = new Set();
        
        order.items.forEach(({ productId, productName, quantity, price }) => {
            if (!summary[productId]) {
                summary[productId] = {
                    productId,
                    productName,
                    totalQuantity: 0,
                    totalSales: 0,
                    orderCount: 0
                };
            }
            
            summary[productId].totalQuantity += quantity;
            summary[productId].totalSales += quantity * price;
            
            if (!countedProducts.has(productId)) {
                summary[productId].orderCount++;
                countedProducts.add(productId);
            }
        });
    });
    
    return Object.values(summary).sort((a, b) => {
        if (b.totalSales !== a.totalSales) {
            return b.totalSales - a.totalSales;
        }
        return a.productName.localeCompare(b.productName);
    });
}

// ========================================
//             Testing the Function
// ========================================
const sampleOrders = [
    {
        orderId: 1,
        orderDate: "2025-01-10",
        items: [
            { productId: "P001", productName: "Pen", quantity: 10, price: 5 },
            { productId: "P002", productName: "Book", quantity: 2, price: 50 }
        ]
    },
    {
        orderId: 2,
        orderDate: "2025-01-11",
        items: [
            { productId: "P001", productName: "Pen", quantity: 5, price: 5 },
            { productId: "P003", productName: "Pencil", quantity: 10, price: 2 }
        ]
    },
    {
        orderId: 3,
        orderDate: "2025-01-12",
        items: [
            { productId: "P002", productName: "Book", quantity: 5, price: 45 },
            { productId: "P004", productName: "Eraser", quantity: 1, price: 3 }
        ]
    },
    {
        orderId: 4,
        orderDate: "2025-01-12",
        items: [
            { productId: "P003", productName: "Pencil", quantity: 5, price: 2 },
            { productId: "P001", productName: "Pen", quantity: 3, price: 5 }
        ]
    }
];

const summaryResult = summarizeOrders(sampleOrders);
console.log(summaryResult);

module.exports = { summarizeOrders };
