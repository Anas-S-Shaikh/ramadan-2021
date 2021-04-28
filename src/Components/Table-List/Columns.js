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
        text: "Sun",
        value: "Sun",
      },
      {
        text: "Mon",
        value: "Mon",
      },
      {
        text: "Tue",
        value: "Tue",
      },
      {
        text: "Wed",
        value: "Wed",
      },
      {
        text: "Thu",
        value: "Thu",
      },
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
