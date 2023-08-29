# AntdMobileTable
This component is a wrapper over the classic antd table with full support for all antd table features.
If the mobileBreakPoint (props value) is less than the specified value then rendereds a different HTML code for better responsiveness of the user interface.

## Installation

```npm i antd-mobile-table```

## Usage
```typescript
import * as React from 'react';
import { Button } from 'antd';
import { AntdMobileTable } from 'antd-mobile-table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Actions',
    dataIndex: 'address',
    key: 'address',
    render: () => {
      <Button>Edit</Button>;
    },
  },
];

const dataSource = [
  {
    id: '1',
    name: 'Alex',
    age: 20,
  },
  {
    id: '2',
    name: 'Paul',
    age: 28,
  },
];

export default function App() {
  return (
    <div>
      <h1>AntdMobileTable</h1>
      <AntdMobileTable
        mobileBreakPoint={768}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}
```

# Demo

![Alt text](demo.gif?raw=true "Title")

# Live demo

https://stackblitz.com/edit/stackblitz-starters-efgdjy?file=src%2FApp.tsx 
