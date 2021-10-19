import React from 'react';

import 'assets/scss/component/table/_table.scss'

interface HeadersArray {
  name: string;
}

interface DataArray {
  atr: string;
  type: string;
  value: string;
  default: string;
  required: boolean;
}

type TableProps = {
  className?: string;
  headers:  HeadersArray[];
  data:  DataArray[];
}

const Table: React.FC<TableProps> = ({ className, headers, data }) => {
  return (
    <table className={`table${className ? ' '+className : ''}`}>
      <thead>
        <tr className="border-b">
          {headers.map((header, index) => (
            <th className="py-2 text-left" key={index}>{header.name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr className="border-b" key={index}>
            <td className="py-2">{item.atr}</td>
            <td className="py-2">{item.type}</td>
            <td className="py-2">{item.value}</td>
            <td className="py-2">{item.default}</td>
            <td className="py-2">{item.required ? 'true' : 'false'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
