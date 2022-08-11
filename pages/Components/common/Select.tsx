import Select from "react-select";

interface Props {
  options: Array<{ label: String; value: String }>;
  selectionColor: string;
}

const SelectDropDown = ({ options, selectionColor }: Props) => {
  return (
    <div className="my-4">
      <Select
        styles={{
          singleValue: (provided) => ({
            ...provided,
            display: "flex",
            color: selectionColor,
            justifyContent: "center",
            fontSize: "0.8rem",
          }),
          control: (provided) => ({
            ...provided,
            border: "2px solid red",
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "transparent",
          }),
        }}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="color"
        options={options}
      />
    </div>
  );
};

export default SelectDropDown;
