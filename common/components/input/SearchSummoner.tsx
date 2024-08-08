'use client';

import clsx from "clsx";

// hooks
import { useState } from "react";

// constants
import { REGIONS } from "@/common/constants/region.constants";

// components
import BasicSelect from "../dropdown/BasicSelect";
import BasicInput from "./BasicInput";
import ColumnLine from "../line/ColumnLine";

// icons
import SearchIcon from '@public/assets/common/search.svg'

interface Props {
  width: string;
  height: string;
}

const SearchSummoner = (props: Props) => {
  const { width, height } = props;

  // STEP1. region 선택
  const [region, setRegion] = useState(REGIONS[0].value);
  
  const handleSelectRegion = (option: {label: string, value: string}) => {
    setRegion(option.value);
  };

  // STEP2. 소환사명 입력
  const [searchText, setSearchText] = useState('');
  const handleInput = (event: any) => {
    setSearchText(event.target.value);
  };

  // STEP3. 검색
  const handleClickSearch = () => {
    
    
  };


  return (
    <div
      className={clsx(
        "flex items-center justify-between h-10 px-4 border border-BD rounded-md",
        width, height
      )}
    >
      <BasicSelect
        options={REGIONS}
        wrapperStyle="w-24 h-full"
        selectBoxStyle=""
        optionBoxStyle="-left-4 w-[120px] p-2 border border-BD rounded-md"
        useScroll={{use: true, height: 230}}
        handler={handleSelectRegion}
      />

      <ColumnLine lineStyle="w-px mx-5 bg-BD" />

      <div className="w-full h-full flex items-center justify-between">
        <BasicInput
          type="text"
          autoFocus={false}
          placeholder={`소환사명 + ${region}`}
          wrapperStyle="w-full h-full"
          inputStyle="w-full h-full text-white text-sm"
          onChange={handleInput}
          onKeyDown={() => null}
        />

        <SearchIcon onClick={() => handleClickSearch()}/>
      </div>
    </div>
  );
};

export default SearchSummoner;