---
title: InputNumber - 数字框
nav:
  title: 组件
  path: /client
group:
  order: 1
  title: Components - 组件
  path: /client/components
---

# InputNumber - 数字框

### 数字框

```tsx
/**
 * title: 数字框
 */
import React from 'react';
import { SchemaRenderer } from '../';

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'number',
      title: `编辑模式`,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-reactions': {
        target: 'read',
        fulfill: {
          state: {
            value: '{{$self.value}}',
          },
        },
      },
    },
    read: {
      interface: 'number',
      type: 'number',
      title: `阅读模式`,
      'x-read-pretty': true,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
    },
  }
};

export default () => {
  return (
    <SchemaRenderer schema={schema} />
  );
};
```

### 百分比

```tsx
/**
 * title: 百分比
 */
import React from 'react';
import { SchemaRenderer } from '../';

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'number',
      title: `编辑模式`,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {
        placeholder: 'please enter',
        formatter: value => `${value}%`,
        parser: value => value.replace('%', ''),
      },
      'x-reactions': {
        target: 'read',
        fulfill: {
          state: {
            value: '{{$self.value}}',
          },
        },
      },
    },
    read: {
      type: 'number',
      title: `阅读模式`,
      'x-read-pretty': true,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {
        placeholder: 'please enter',
        formatter: value => `${value}%`,
        parser: value => value.replace('%', ''),
      },
    },
  }
};

export default () => {
  return (
    <SchemaRenderer schema={schema} />
  );
};
```