import Table from "./Table";
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";

const CategoriesReport = ({ reportData, className }) => {
  return (
    <div className={className}>
      <h3>Categories Report</h3>
      <Table>
        <thead>
          <tr className="center-align">
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Discounted Products</TableHeaderCell>
            <TableHeaderCell>Total Products</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {reportData.map((category, index) => (
            <tr key={index}>
              <TableCell className="left-align">
                {category.categoryName || "No category"}
              </TableCell>
              <TableCell className="center-align">
                {category.discountedProducts}
              </TableCell>
              <TableCell className="center-align">
                {category.totalProducts}
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoriesReport;
