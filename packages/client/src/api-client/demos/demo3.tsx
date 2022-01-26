import { APIClient, APIClientProvider, useAPIClient, useRequest } from '@nocobase/client';
import { Button, Table } from 'antd';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';

const apiClient = new APIClient();

const mock = new MockAdapter(apiClient.axios);
const sleep = (value: number) => new Promise((resolve) => setTimeout(resolve, value));

mock.onGet('/users:list').reply(async () => {
  await sleep(1000);
  return [
    200,
    {
      data: [
        { id: 1, name: 'John Smith' },
        { id: 2, name: 'James' },
      ],
    },
  ];
});

const ComponentA = () => {
  console.log('ComponentA');
  const { data, loading } = useRequest(
    {
      url: 'users:list',
      method: 'get',
    },
    {
      uid: 'test', // 当指定了 uid 的 useRequest 的结果，可以通过 api.service(uid) 获取
    },
  );
  return (
    <Table
      pagination={false}
      rowKey={'id'}
      loading={loading}
      dataSource={data?.data}
      columns={[{ title: 'Name', dataIndex: 'name' }]}
    />
  );
};

const ComponentB = () => {
  console.log('ComponentB');
  const apiClient = useAPIClient();
  return <Button onClick={() => apiClient.service('test')?.refresh()}>刷新</Button>;
};

export default () => {
  return (
    <APIClientProvider apiClient={apiClient}>
      <ComponentB />
      <br/><br/>
      <ComponentA />
    </APIClientProvider>
  );
};