
select * from "User";
select * from "User" where refCode = 'Invite_RUXCWXDUS';
select count(*) from "User";
select * from "UserAction";
select count(*) from "Group";
select * from "Group";
select * from "Memecoin";

delete from "Memecoin" where id =3;

drop table if exists _prisma_migrations cascade;
drop table if exists "User" cascade;
drop table if exists "UserAction" cascade;
drop table if exists "Wallet" cascade;
drop table if exists "WalletOrder" cascade;
drop table if exists "Group" cascade;
drop table if exists "Memecoin" cascade;
drop table if exists "BuyOrder" cascade;
drop table if exists "SellOrder" cascade;

