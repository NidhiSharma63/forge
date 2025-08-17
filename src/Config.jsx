const config = {
  components: {
    Heading: {
      fields: {
        text: { type: "text" },
        size: { type: "select", options: ["h1", "h2", "h3"] },
      },
      render: ({ text, size }) => {
        const Tag = size || "h2";
        return <Tag>{text}</Tag>;
      },
    },
    Button: {
      fields: {
        label: { type: "text" },
        href: { type: "text" },
      },
      render: ({ label, href }) => (
        <a href={href} className="px-4 py-2 bg-blue-600 text-white rounded">
          {label}
        </a>
      ),
    },
  },
};

export default config;
