-- CREATE TABLE
CREATE TABLE `board` (
	`board_no`		int				NOT NULL AUTO_INCREMENT,
	`version_id`	int,
	`category_id`	int,
	`title`			varchar(100)	NOT NULL,
	`content`		text			NOT NULL,
	`file_name`		varchar(200),
	`file_path`		varchar(200),
	`hashtag`		varchar(500),
	`reg_date`		datetime		DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`board_no`)
);

CREATE TABLE `board_category` (
	`category_id`	int				NOT NULL AUTO_INCREMENT,
	`category`		varchar(100),
	PRIMARY KEY (`category_id`)
);

CREATE TABLE `board_version` (
	`version_id`	int				NOT NULL AUTO_INCREMENT,
	`version`		varchar(100),
	PRIMARY KEY (`version_id`)
);

CREATE TABLE `board_hashtag` (
	`hashtag_id`	int				NOT NULL AUTO_INCREMENT,
	`hashtag`		varchar(100),
	PRIMARY KEY (`hashtag_id`)
);

CREATE TABLE `admin_log` (
	`log_no`		int				NOT NULL AUTO_INCREMENT,
	`log_ip`		varchar(50),
	`log_content`	text,
	`log_time`		datetime		DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`log_no`)
);


-- SET UNIQUE KEY
CREATE UNIQUE INDEX `UNIQUE_INDEX_BOARD` ON `board` (
	`version_id`,
	`category_id`,
	`board_no`
);


-- CREATE INDEX
CREATE INDEX `SEARCH_INDEX_BOARD` ON `board` (
	`title`,
	`hashtag`
);