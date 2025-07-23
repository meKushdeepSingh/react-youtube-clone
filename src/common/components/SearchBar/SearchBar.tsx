import { useState, type FC } from "react";
import { Button } from "../Button";
import { Cross, Search } from "../../../assets";

const SearchBar: FC = () => {
  // State to manage focus on the input field
  const [isFocusedInput, setIsFocusedInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const showClearIcon = inputValue.length > 0;

  return (
    <div className="flex items-center h-10">
      <div
        className={`flex h-full items-center pl-4 pr-8 py-2 border border-border-color rounded-tl-full rounded-bl-full transition-all duration-200 ease-in-out relative ${
          isFocusedInput ? "bg=transparent" : "bg-transparent"
        }`}
      >
        {isFocusedInput && <Search className="w-5 h-5 mr-2" />}
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent text-white placeholder:text-text-placeholder focus:outline-none w-[354px]"
          onFocus={() => setIsFocusedInput(true)}
          onBlur={() => setIsFocusedInput(false)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {showClearIcon && (
          <div className="absolute right-0">
            <Button
              onClick={() => setInputValue("")}
              type="icon-round"
            >
              <Cross />
            </Button>
          </div>
        )}
      </div>

      <div className="flex h-full w-16 items-center justify-center bg-button-background border border-l-0 border-border-color rounded-tr-full rounded-br-full">
        <Button type="no-style">
          <Search />
        </Button>
      </div>
    </div>
  );
};

export { SearchBar };
