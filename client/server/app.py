from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for React


df = pd.read_csv("./Datasets/Dataset1.csv")

@app.route("/top10", methods=["GET"])
def top_subcategories():
    top_10_categories = df.groupby("Sub-Category")["Sales"].sum().nlargest(100).reset_index()
    return jsonify(top_10_categories.to_dict(orient="records"))
    # Group by Sub-Category and get total sales


    subcategory_sales = df.groupby("Sub-Category")["Sales"].sum().nlargest(10).reset_index()
    
    # Get product names & count for each sub-category
    subcategory_products = df.groupby("Sub-Category")["Product Name"].value_counts().reset_index(name="Count")
    
    # Merge sales and product details
    top_subcategories = []
    for _, row in subcategory_sales.iterrows():
        subcategory = row["Sub-Category"]
        sales = row["Sales"]
        
        # Get all products in this sub-category
        products = subcategory_products[subcategory_products["Sub-Category"] == subcategory][["Product Name", "Count"]].to_dict(orient="records")
        
        top_subcategories.append({
            "Sub-Category": subcategory,
            "Total Sales": sales,
            "Products": products
        })
    
    return jsonify(top_subcategories)

if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=5000)
