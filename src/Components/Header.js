import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMenuOpen } from "../store/slices/app";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestedItems, setSuggestedItems] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestedItems();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const fetchSuggestedItems = async () => {
    try {
      const resp =
        (await (await fetch(YOUTUBE_SEARCH_API + search)).json())?.[1] || [];

      setSuggestedItems(resp);
    } catch (error) {}
  };

  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(updateMenuOpen());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 bg-gray-100 shadow-lg rounded-md">
      <div className="col-span-1 flex">
        <img
          className={styles.btnStyle}
          onClick={handleMenu}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <img
          className={`${styles.btnStyle} ml-4`}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <div className="grid-cols-11">
        <input
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="border-2 border-gray-400 rounded-l-full p-1 w-[80%] px-4"
          placeholder="Search"
        ></input>
        <button className="bg-gray-200 p-1 h-full text-center px-4 rounded-r-full">
          {" "}
          🔍
        </button>

        {isInputFocused && (
          <div className="w-[35%] absolute bg-white  z-50 rounded-md shadow-xl border-2 border-gray-200">
            {suggestedItems.map((item) => (
              <p className="hover:bg-gray-200 w-full p-2">{item}</p>
            ))}
          </div>
        )}
      </div>

      <div className="grid-cols-1 flex flex-row-reverse">
        <img
          className={`${styles.btnStyle}`}
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

const styles = {
  btnStyle: "h-8 cursor-pointer",
};

export default Header;
