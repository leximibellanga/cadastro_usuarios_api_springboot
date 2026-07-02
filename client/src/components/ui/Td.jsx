
export default function Td({ text, colspan = 1 }) {
    return <td className="p-2 text-center text-[.95em]" colSpan={colspan}>{text}</td>
}
