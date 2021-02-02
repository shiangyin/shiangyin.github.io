import Link from "next/link";
import styled from "@emotion/styled";

function Header() {
  const StyleHeader = styled.header`
    border-bottom: 1px solid;
  `;
  const StyledNav = styled.ul`
    margin: 1em;
    display: flex;
  `;
  const StyledNavItem = styled.li`
    list-style-type: none;
    padding: 0 1em;
    border-right: 1px solid;
  `;

  const routes = [
    { path: "/", name: "首頁" },
    { path: "/login", name: "登入" },
    { path: "/profile", name: "個人資料" },
    { path: "/travel", name: "旅行建立頁" },
    { path: "/travel_fee_list", name: "旅行費用列表" },
    { path: "/travel_fee", name: "旅行費用項目" },
    { path: "/debt", name: "費用債務" },
    { path: "/travel_record", name: "旅行紀錄" },
  ];

  return (
    <StyleHeader>
      <nav>
        <StyledNav>
          {routes.map(({ path, name }) => {
            return (
              <StyledNavItem key={path}>
                <Link href={path}>{name}</Link>
              </StyledNavItem>
            );
          })}
        </StyledNav>
      </nav>
    </StyleHeader>
  );
}

export default Header;
