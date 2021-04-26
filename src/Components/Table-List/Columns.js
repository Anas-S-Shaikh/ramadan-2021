export const columns = [
  {
    title: "Roza",
    dataIndex: "roza",
    key: "roza",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Day",
    dataIndex: "day",
    filters: [
      {
        text: "Fri",
        value: "Fri",
      },
      {
        text: "Sat",
        value: "Sat",
      },
    ],
    key: "day",
    onFilter: (value, record) => record.day===value,
  },
  {
    title: "Sehr",
    dataIndex: "sehr",
    key: "sehr",
  },
  {
    title: "Iftar",
    dataIndex: "iftar",
    key: "iftar",
  },
];
