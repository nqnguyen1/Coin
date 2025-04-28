import pandas as pd

# Load your CSV file
csv_file_path = r'.\inventory.csv'

df = pd.read_csv(csv_file_path, encoding='ISO-8859-1')

# Split the 'Denomination' column into 'Denomination_Value' and 'Denomination_Unit'
df['Denomination_Value'] = df['Denomination'].str.extract('(\d+)').astype(int)
df['Denomination_Unit'] = df['Denomination'].str.extract('([^\d]+)')

# Replace all '¢' with 'c' in 'Denomination_Unit'
df['Denomination_Unit'] = df['Denomination_Unit'].str.replace('¢', 'c', regex=False)
df['Denomination'] = df['Denomination'].str.replace('¢', 'c', regex=False)

# Remove dollar signs, commas, and parentheses from 'Price' and 'Profit' columns, then convert to float
df['Price'] = df['Price'].replace({'\\$': '', ',': '', '\\(':'', '\\)':''}, regex=True).astype(float)
df['Profit'] = df['Profit'].replace({'\\$': '', ',': '', '\\(':'', '\\)':''}, regex=True).astype(float)

# Define metal type mappings
metal_mapping = {
    'Gold': ['Eagle', 'Buffalo', 'Libertad', 'Panda', 'Philharmonic'],
    'Silver': ['Morgan', 'Peace', 'Mercury', 'Walking Liberty', 'Seated Liberty', 'Barber', 'Standing Liberty', 'Washington', 'Libertad', 'Panda'],
    'Copper': ['Indian', 'Lincoln', 'Flying Eagle'],
    'Nickel': ['Buffalo', 'Liberty Nickel', 'Three Cent Nickel'],
}

# Function to determine metal type
def get_metal_type(coin_type):
    for metal, keywords in metal_mapping.items():
        if any(keyword in coin_type for keyword in keywords):
            return metal
    return 'Unknown'

# Apply metal type classification
df['Metal_Type'] = df['Type'].apply(get_metal_type)

# Save the updated CSV
output_path = r'.\updated_inventory_with_metal1.csv'
df.to_csv(output_path, index=False)

print(f"File has been updated successfully! Saved to: {output_path}")