export type TableHeadCells = {
  name: string;
  className: string;
}[];

type TableProps = {
  headCells: TableHeadCells;
  TableBody: React.ReactNode;
};

import './table.styles.scss';

const Table = ({ headCells, TableBody }: TableProps): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          {headCells.map(cell => (
            <th key={cell.name} className={cell.className ? cell.className : ''}>
              {cell.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{TableBody}</tbody>
    </table>
  );
};

export default Table;
