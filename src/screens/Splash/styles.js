import { bs, sizes } from "../../theme";

const styles = {
  container: {
    ...bs.match_parent,
    ...bs.center,
    ...bs.bg_white
  },
  topContainer: {
    ...bs.full_width,
    ...bs.pl_12x
  },
  icon: {
    ...bs.mb_8x,
    height: sizes.em(100),
    width: sizes.em(100),
    borderRadius: sizes.em(15)
  }
};

export default styles;
