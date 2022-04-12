import dayjs from "dayjs";

export default {
  uppercase(value) {
    if (typeof value === "string") {
      return value.toUpperCase();
    }
    return value;
  },
  money(val) {
    if (typeof val === "number") {
      return `$${val.toFixed(2)}`;
    }
  },
  firstCharacter(value) {
    return value.charAt(0);
  },

  dateFormat(value) {
    return dayjs(value).format("dddd, MMMM D");
  },

  timeFormat(value) {
    return dayjs(value, "HH:mm:ss.SSSSSS").format("hA");
  },

  lowercase(value) {
    if (typeof value === "string") {
      return value.toLowerCase();
    }
    return value;
  },

  // scriptName will be all the content up to the _
  scriptName(value) {
    if (typeof value === "string") {
      const fileNameArray = value.split("_");
      return fileNameArray[0];
    }
    return value;
  },

  //  scriptVersion will be the content between _v and .
  scriptVersion(value) {
    if (typeof value === "string") {
      const fileVersionArray = value.split("_v");
      const fileVersion = fileVersionArray[1].split(".");
      return fileVersion[0];
    }
    return value;
  }
};
