-- 레드스톤
CREATE OR REPLACE VIEW `V_RDSTNCRCITS`
AS 
SELECT `board_no`, `version_id`, `category_id`, `title`, `content`, `file_name`, `file_path`, `hashtag`, `reg_date`
FROM `board`
WHERE category_id = 1
;

-- 명령어
CREATE OR REPLACE VIEW `V_COMMANDS`
AS 
SELECT `board_no`, `version_id`, `category_id`, `title`, `content`, `file_name`, `file_path`, `hashtag`, `reg_date`
FROM `board`
WHERE category_id = 2
;

-- 특수 블럭 및 아이템
CREATE OR REPLACE VIEW `V_BLKSNITEMS`
AS 
SELECT `board_no`, `version_id`, `category_id`, `title`, `content`, `file_name`, `file_path`, `hashtag`, `reg_date`
FROM `board`
WHERE category_id = 3
;

-- 제작법
CREATE OR REPLACE VIEW `V_RECIPES`
AS 
SELECT `board_no`, `version_id`, `category_id`, `title`, `content`, `file_name`, `file_path`, `hashtag`, `reg_date`
FROM `board`
WHERE category_id = 4
;

-- 인챈트
CREATE OR REPLACE VIEW `V_ENCHANT`
AS 
SELECT `board_no`, `version_id`, `category_id`, `title`, `content`, `file_name`, `file_path`, `hashtag`, `reg_date`
FROM `board`
WHERE category_id = 5
;

-- 양조
CREATE OR REPLACE VIEW `V_BREWING`
AS 
SELECT `board_no`, `version_id`, `category_id`, `title`, `content`, `file_name`, `file_path`, `hashtag`, `reg_date`
FROM `board`
WHERE category_id = 6
;

-- 공장
CREATE OR REPLACE VIEW `V_FACTORY`
AS 
SELECT `board_no`, `version_id`, `category_id`, `title`, `content`, `file_name`, `file_path`, `hashtag`, `reg_date`
FROM `board`
WHERE category_id = 7
;

-- 용어 사전
CREATE OR REPLACE VIEW `V_TERMS`
AS 
SELECT `board_no`, `version_id`, `category_id`, `title`, `content`, `file_name`, `file_path`, `hashtag`, `reg_date`
FROM `board`
WHERE category_id = 8
;

-- 어플 가이드
CREATE OR REPLACE VIEW `V_GUIDE`
AS 
SELECT `board_no`, `version_id`, `category_id`, `title`, `content`, `file_name`, `file_path`, `hashtag`, `reg_date`
FROM `board`
WHERE category_id = 9
;