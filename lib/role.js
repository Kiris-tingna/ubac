	/**
	  *	@fileOverView role control  
	*/
	
	var db = require('./data.js');
	var q = require('q');
	var cache = require('./cache.js');
	
	/**
	  *	@desp ��ӽ�ɫ
	*/
	var create = function(roleInfo){
		cache.set('roleInfos', null);
		return db.role.add(roleInfo);
	};
	
	
	/**
	  *	@desp ��ȡ���н�ɫ�������Ȩ��
	*/
	var get = function(query){
		if(!query){
			var roleInfos = cache.get('roleInfos');
			if(roleInfos)
				return q.fcall(function(){ return roleInfos;});
			return db.role.get().then(function(result){
				cache.set('roleInfos', result);
				return result;
			});
		}
		return db.role.get(query);
	};
	
	
	/**
	  *	@desp ���ý�ɫ
	*/
	var set = function(roleInfo){
		cache.set('roleInfos', null);
		return db.role.set(roleInfo);
	};
	
	
	/**
	  *	@desp �h����ɫ�����h���c���Ñ�ӳ���P�S
	*/
	var remove = function(query){
		cache.set('roleInfos', null);
		return db.role.del(query);
	};
	
	
	exports.create = create;
	exports.get = get;
	exports.set = set;
	exports.remove = remove;