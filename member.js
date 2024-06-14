function skillsMember(){
    }
    skillsMember.prototype = {
        init: function() {
            this.initEvents();
        },
        initEvents: function() {
            this.initSkills();
        },
        initSkills: function() {
            this.skills();
        },
        skills: function() {
            var self = this;
            var skills = document.querySelectorAll('.skills');
            for (var i = 0; i < skills.length; i++) {
                var skill = skills[i];
                var skillValue = skill.getAttribute('data-skill');
                var skillBar = skill.querySelector('.skills-bar');
                var skillBarValue = skillBar.querySelector('.skills-bar-value');
                var skillBarValueText = skillBar.querySelector('.skills-bar-value-text');
                var skillBarValueTextValue = skillBar.querySelector('.skills-bar-value-text-value');
                var skillBarValueTextValueMax = skillBar.querySelector('.skills-bar-value-text-value-max');
                skillBarValueTextValue.textContent = skillValue;
                skillBarValueTextValueMax.textContent = skillValue;
                var skillBarValueWidth = 0;
                var skillBarValueTextValueWidth = 0;
                var skillBarValueTextValueMaxWidth = 0;
                var skillBarValueTimer = setInterval(function() {
                    if (skillBarValueWidth >= skillValue) {
                        clearInterval(skillBarValueTimer);
                    } else {
                        skillBarValueWidth++;
                        skillBarValueTextValueWidth++;
                        skillBarValueTextValueMaxWidth++;
                        skillBarValue.style.width = skillBarValueWidth + '%';
                        skillBarValueTextValue.style.width = skillBarValueTextValueWidth + '%';
                        skillBarValueTextValueMax.style.width = skillBarValueTextValueMaxWidth + '%';
                    }
                }, 10);
            }
        }
    };
    var skillsMember = new skillsMember();
    skillsMember.init();