package com.palmelf.eoffice.model.admin;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;

import com.palmelf.core.model.BaseModel;

@Entity
@Table(name = "book_type")
public class BookType extends BaseModel {
	/**
	 * 
	 */
	private static final long serialVersionUID = -6526622189190610263L;
	private Long typeId;
	private String typeName;

	public BookType() {
	}

	public BookType(Long in_typeId) {
		this.setTypeId(in_typeId);
	}

	@Id
	@GeneratedValue
	@Column(name = "typeId", unique = true, nullable = false)
	public Long getTypeId() {
		return this.typeId;
	}

	public void setTypeId(Long typeId) {
		this.typeId = typeId;
	}

	@Column(name = "typeName", nullable = false, length = 128)
	public String getTypeName() {
		return this.typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	@Override
	public boolean equals(Object object) {
		if (!(object instanceof BookType)) {
			return false;
		}
		BookType rhs = (BookType) object;
		return new EqualsBuilder().append(this.typeId, rhs.typeId).append(this.typeName, rhs.typeName).isEquals();
	}

	@Override
	public int hashCode() {
		return new HashCodeBuilder(-82280557, -700257973).append(this.typeId).append(this.typeName).toHashCode();
	}

	@Override
	public String toString() {
		return new ToStringBuilder(this).append("typeId", this.typeId).append("typeName", this.typeName).toString();
	}
}
